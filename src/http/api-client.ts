import ky from 'ky'

export const api = ky.create({
  hooks: {
    beforeRequest: [
      async request => {
        // get async-storage

      },
    ],
  },
  prefixUrl: process.env.API_URL || 'https://dummyjson.com',
  // https://dummyjson.com/docs
})