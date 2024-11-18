import { defineStore } from 'pinia'
import { formConfig, modelsConfig, editConfig } from './config'

export const useConfigStore = defineStore('configer', {
  // 状态
  state: () => ({
    list: [],
    currentItem: 0,
    totalItems: 0,
    loading: false,
    createData: {
      baseInfo: {
        comName: '模板_0',
        comId: 'newDemo_0',
        formSize: 'large',
        labelPosition: 'top',
        column: 2,
        gutter: 20,
        spacing: 20
      },
      comList: [
        {
          label: '标题1111',
          key: 'name',
          remark: '备注描述777',
          column: 2,
          gutter: 20,
          length: 20,
          comName: 'TextInput',
          comlabel: '文本框-单行',
          comType: 'text',
          dataType: 'string',
          required: true,
          rules: [{ required: true, message: '控件名称不可为空', trigger: 'blur' }],
          placeholder: '请输入控件名称',
          default: ''
        },
        {
          label: '基础下拉2222',
          key: 'level',
          column: 2,
          comName: 'BasicSelect',
          comlabel: '下拉框-基础',
          comType: 'select',
          dataType: 'string',
          required: true,
          rules: [{ required: true, message: '请选择奖励级别', trigger: 'change' }],
          placeholder: '请选择',
          optionKey: 'default',
          options: [
            { label: '一等奖', value: '1' },
            { label: '二等奖', value: '2' },
            { label: '三等奖', value: '3' }
          ],
          propsKeys: {
            multiple: false,
            value: 'value',
            label: 'label'
          },
          // onChange: 'handleChange',
          default: ''
        }
      ]
    },
    modelsConfig: modelsConfig, // 模板数据
    formConfig: formConfig, // 表单组件库
    editConfig: editConfig, // 编辑态组件库
    currentEditConfigItem: null // 当前编辑组件 
  }),
  // 状态数据计算属性 相当于computed
  getters: {
    // totalCost(state) {
    //   return state.items.reduce((total, item) => total + item.price, 0)
    // }
  },
  // 修改状态 同步异步都可修改
  actions: {
    setlist(newList: []) {
      this.list = newList
    },
    setEditConfog(newPage: number) {
      // this.currentPage = newPage
    },
    setTotalItems(newTotal: number) {
      this.totalItems = newTotal
    },
    fetchArticles() {
      try {
        this.loading = true
      } catch (error) {
        console.error((error as Error).message)
      } finally {
        this.loading = false
      }
    }
  }
})
