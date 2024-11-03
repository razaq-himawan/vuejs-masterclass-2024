import { projectsQuery } from '@/utils/supaQueries'
import { useMemoize } from '@vueuse/core'
import type { Projects } from '@/utils/supaQueries'

export const useProjectsStore = defineStore('project-store', () => {
  const projects = ref<Projects | null>()
  const loadProjects = useMemoize(async (key: string) => await projectsQuery)

  const validateCache = () => {
    if (projects.value?.length) {
      projectsQuery.then(({ data }) => {
        if (JSON.stringify(projects.value) === JSON.stringify(data)) {
          console.log('Cached and fresh data matched!')
          return
        } else {
          console.log('Something has changed!')
          loadProjects.delete('projects')
        }
      })
    }
  }

  const getProjects = async () => {
    const { data, error, status } = await loadProjects('projects')

    if (error) {
      useErrorStore().setError({ error, customCode: status })
    }

    projects.value = data

    validateCache()
  }

  return {
    projects,
    getProjects,
  }
})
