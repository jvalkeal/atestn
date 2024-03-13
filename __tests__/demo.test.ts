import * as core from '@actions/core'
import * as github from '@actions/github'
import * as nexusSync from '../src/nexus-sync'

const originalGitHubWorkspace = process.env['GITHUB_WORKSPACE']
const originalGitHubRepository = process.env['GITHUB_REPOSITORY']
let originalContext = { ...github.context }
let inputs = {} as any

xdescribe('local sync tests', () => {
  beforeAll(async () => {
    jest.spyOn(core, 'getInput').mockImplementation((name: string) => {
      return inputs[name]
    })
  }, 300000)

  beforeEach(() => {
    inputs = {}
  })

  afterAll(async () => {
    delete process.env['GITHUB_WORKSPACE']
    if (originalGitHubWorkspace) {
      process.env['GITHUB_WORKSPACE'] = originalGitHubWorkspace
    }
    delete process.env['GITHUB_REPOSITORY']
    if (originalGitHubRepository) {
      process.env['GITHUB_REPOSITORY'] = originalGitHubRepository
    }

    github.context.ref = originalContext.ref
    github.context.sha = originalContext.sha

    jest.restoreAllMocks()
  }, 100000)

  it('Run ok with local nexus2 pro', async () => {
    process.env['GITHUB_REPOSITORY'] = 'owner/repo'
    inputs['dir'] = '/tmp/nexus'
    inputs['username'] = 'admin'
    inputs['password'] = 'admin123'
    inputs['url'] = 'http://localhost:8081/nexus'
    inputs['staging-profile-name'] = 'test'
    inputs['create'] = 'true'
    inputs['upload'] = 'true'
    inputs['close'] = 'true'
    inputs['release'] = 'true'
    // inputs['generate-checksums'] = 'true'
    await nexusSync.run()
  }, 100000)
})
