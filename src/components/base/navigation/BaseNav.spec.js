import { mount } from '@vue/test-utils'
import BaseNav from './BaseNav.vue'
import { describe, it, expect, beforeEach } from 'vitest'

describe('BaseNav', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(BaseNav, {
      props: {
        items: [
          {
            name: 'first',
            route: '/first-route',
          },
          {
            name: 'second',
            route: '/second-route',
          },
        ],
      },
    })
  })

  it('should mount component', () => {
    expect(BaseNav).toBeTruthy()

    expect(wrapper.text()).toContain('first')
    expect(wrapper.text()).toContain('second')
  })

  it('should be rendered correctly with props', () => {
    expect(wrapper.text()).toMatchSnapshot()
  })

  it('should be rendered correctly without props', () => {
    const wrapper = mount(BaseNav)

    expect(wrapper.text()).toMatchSnapshot()
  })
})
