import axios from 'axios';

const newConfigs = {
    customId: '0001',
    development: {
        database: {
            uri: 'mongodb+srv://string',
        },
        email: {
            mailUser: 'fe5.final.pj@gmail.com',
            mailPassword: 'bykgviwyvgiepcbf',
            mailService: 'gmail',
        },
        auth: {
            secretOrKey: 'somesecret',
        },
        infinitScrollEnabled: true,
        minOrderValue: 100,
        someCustomParam: 'custom params value',
    },
    production: {
        database: {
            uri: 'mongodb+srv://..............',
        },
        email: {
            mailUser: 'fe5.final.pj@gmail.com',
            mailPassword: 'bykgviwyvgiepcbf',
            mailService: 'gmail',
        },
        auth: {
            secretOrKey: 'somesecret',
        },
        infinitScrollEnabled: true,
        minOrderValue: 100,
        someCustomParam: 'custom params value',
    },
};

const addConfigurations = async () => {
    const REACT_APP_URL_API = process.env.REACT_APP_URL_API;
    try {
        const response = await axios.post(`${REACT_APP_URL_API}/configs`, newConfigs);
        return response;
    } catch (error) {
        console.error(error.message);
    }
};
export default addConfigurations;
