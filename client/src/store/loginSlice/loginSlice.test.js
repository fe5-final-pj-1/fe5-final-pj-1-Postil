import reducer, { userLogIn, userLogOut } from './loginSlice';

const initialState = {
    isLogIn: false,
    token: '',
    expirationTime: 0,
};

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test('should successfully log in and return expected state', () => {
    expect(
        reducer(
            initialState,
            userLogIn({
                token: 'Bearer kfdsjfdjafdsgjlkefkcjkaejfckdjfajfkjefjiwej',
                expirationTime: 1000000000,
            }),
        ),
    ).toEqual({
        isLogIn: true,
        token: 'Bearer kfdsjfdjafdsgjlkefkcjkaejfckdjfajfkjefjiwej',
        expirationTime: 1000000000,
    });
});

test('should successfully log out and return initial state', () => {
    const changedState = {
        isLogIn: true,
        token: 'Bearer kfdsjfdjafdsgjlkefkcjkaejfckdjfajfkjefjiwej',
        expirationTime: 1000000000,
    };
    expect(reducer(changedState, userLogOut())).toEqual(initialState);
});
