import { mount } from '@vue/test-utils'
import FuncSum from './funcSum.js'

describe('Counter', () => {
  const wrapper = mount(FuncSum)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<p id="result"></p>')
  })

  it('has a input', () => {
    expect(wrapper.contains('input')).toBe(true)
  })

})
test('the input value go to method', async () => {
  const wrapper = mount(FuncSum)

  await wrapper.find('input').setValue('1 3 5')

  const button1 = wrapper.find('button')
  await button1.trigger('click')

  expect(wrapper.emitted('submit')[0][0]).toBe('4')
})

