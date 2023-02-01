import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5678/api'}),
    tagTypes: ['Student'],
    endpoints: builder => ({
        getStudents: builder.query({
            query: () => '/students',
            providesTags: ['Student']
        }),
        addStudents: builder.mutation({
            query: (body) => ({
                url: '/students',
                method: 'post',
                body,
            }),
            invalidatesTags: ['Student']
        })
    })
})

export const {useGetStudentsQuery, useAddStudentsMutation } = apiSlice;