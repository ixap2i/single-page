const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/ixap2i.github.io/'
    }
} : {}
  
export default {
...routerBase
}