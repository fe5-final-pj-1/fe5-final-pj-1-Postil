import reducer, { filtersAdded, filtersRemoved, filtersRemovedAll } from './filtersSlice';

const initialState = {
    filtersQuery: {
        perPage: ['12'],
        startPage: ['1'],
    },
    filtersChecked: false,
};

test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test('should add filter by color to "filtersQuery"', () => {
    expect(
        reducer(
            initialState,
            filtersAdded({
                color: ['red'],
            }),
        ),
    ).toEqual({
        filtersQuery: {
            perPage: ['12'],
            startPage: ['1'],
            color: ['red'],
        },
        filtersChecked: true,
    });
});

test('should removed filter by color from "filtersQuery"', () => {
    const lastState = {
        filtersQuery: {
            perPage: ['12'],
            startPage: ['1'],
            color: ['red'],
            size: ['double'],
        },
        filtersChecked: true,
    };
    const updatedState = {
        filtersQuery: {
            perPage: ['12'],
            startPage: ['1'],
            size: ['double'],
        },
        filtersChecked: true,
    };
    expect(
        reducer(
            lastState,
            filtersRemoved({
                perPage: ['12'],
                startPage: ['1'],
                size: ['double'],
            }),
        ),
    ).toEqual(updatedState);
});

test('should remove all filters except "perPage" and "startPage"', () => {
    const lastState = {
        filtersQuery: {
            perPage: ['12'],
            startPage: ['1'],
            color: ['red'],
            size: ['double'],
        },
        filtersChecked: true,
    };
    expect(reducer(lastState, filtersRemovedAll())).toEqual(initialState);
});
