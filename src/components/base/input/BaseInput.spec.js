import { mount } from '@vue/test-utils'
import BaseInput from './BaseInput.vue'
import { describe, it, expect, beforeEach } from 'vitest'

describe('BaseInput', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(BaseInput, {
      props: {
        type: 'bg-white',
      },
      slots: {
        default: 'Content',
      },
    })
  })

  it.skip('should mount component', () => {
    expect(BaseInput).toBeTruthy()

    expect(wrapper.text()).toContain('Content')
  })

  it.skip('should be clicked', async () => {
    expect(BaseInput).toBeTruthy()

    await wrapper.get('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it.skip('should match snapshot UI testing', () => {
    expect(wrapper.text()).toMatchSnapshot()
  })
})
