import { axiosInstanceURL } from './_axiosInstanceURL';

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
    try {
        const response = await axiosInstanceURL.post(`/configs`, newConfigs);
        return response;
    } catch (error) {
        console.error(error.message);
    }
};
export default addConfigurations;
