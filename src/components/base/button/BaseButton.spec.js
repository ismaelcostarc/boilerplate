import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'
import { describe, it, expect, beforeEach } from 'vitest'

describe('BaseButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(BaseButton, {
      props: {
        type: 'bg-white',
      },
      slots: {
        default: 'Content',
      },
    })
  })

  it('should mount component', () => {
    expect(BaseButton).toBeTruthy()

    expect(wrapper.text()).toContain('Content')
  })

  it('should be clicked', async () => {
    expect(BaseButton).toBeTruthy()

    await wrapper.get('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('should be rendered correctly with props', () => {
    expect(wrapper.text()).toMatchSnapshot()
  })

  it('should be rendered correctly without props or slots', () => {
    const wrapper1 = mount(BaseButton, {
      slots: {
        default: 'Content',
      },
    })

    const wrapper2 = mount(BaseButton, {
      props: {
        type: 'bg-white',
      },
    })

    const wrapper3 = mount(BaseButton)

    expect(wrapper1.text()).toMatchSnapshot()
    expect(wrapper2.text()).toMatchSnapshot()
    expect(wrapper3.text()).toMatchSnapshot()
  })
})
