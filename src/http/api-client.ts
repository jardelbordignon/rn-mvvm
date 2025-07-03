import ky from 'ky'

export const api = ky.create({
  hooks: {
    beforeRequest: [
      async request => {
        // get async-storage

      },
    ],
  },
  prefixUrl: 'https://fakestoreapi.com',
  // https://fakestoreapi.com/docs
})