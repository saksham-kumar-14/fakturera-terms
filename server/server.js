const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');

fastify.register(cors, {
    origin: true
});

const sequelize = require('./sequelize');
const Text = require('./models/text');

// get all text
fastify.get('/text', async (req, res) => {
    const texts = await Text.findAll();
    return texts;
});

// add a text
fastify.post('/text', async (req, reply) => {
    const { content, language, image, terms, btn, nav } = req.body;

    try {
        const saved = await Text.create({ content, language, image, terms, btn, nav });
        reply.send(saved);
    } catch (err) {
        console.error(err);
        reply.status(500).send({ error: 'Something went wrong' });
    }
});


// edit text
fastify.put('/text/:id', async (req, res) => {
    const { id } = req.params;
    const { content, language, image, terms, btn, nav } = req.body;

    try {
        const text = await Text.findByPk(id);
        if (!text) {
            return res.code(404).send({ message: 'Text not found' });
        }

        text.content = content;
        text.language = language;
        text.image = image;
        text.btn = btn;
        text.terms = terms;
        text.nav = nav;
        await text.save();

        return { message: 'Text updated successfully', text };
    } catch (err) {
        req.log.error(err);
        return res.code(500).send({ message: 'Server error' });
    }
});

// delete text
fastify.delete('/text/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const text = await Text.findByPk(id);
        if (!text) {
            return res.code(404).send({ message: 'Text not found' });
        }

        await text.destroy();
        return { message: 'Text deleted successfully' };
    } catch (err) {
        req.log.error(err);
        return res.code(500).send({ message: 'Server error' });
    }
});


const PORT = process.env.SERVER_PORT
const start = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync();
        console.log('Models synchronized.');

        await fastify.listen({ port: PORT | 3001 });
        console.log(`Server is up on http://localhost:${PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();