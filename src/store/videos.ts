import axiosInstance from '@/axios'
import { defineStore } from 'pinia'

export const useVideosStore = defineStore('videos', {
  state: () => ({
    videos: [],
  }),
  actions: {
    async fetchPopularVideos() {
      try {
        const {data} = await axiosInstance.get('/videos', {
          params: {
            chart: 'mostPopular',
          },
        })
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    },
  },
})
