export const editConfig = [
  {
    label: '文本框-单行',
    key: 'name',
    column: 3,
    gutter: 20,
    length: 20,
    comName: 'TextInput',
    comType: 'text',
    dataType: 'string',
    required: true
  }
]

export const formConfig = [
  {
    label: '文本框-单行',
    key: 'name',
    column: 3,
    gutter: 20,

    length: 20,
    comName: 'TextInput',
    comlabel: '文本框-单行',
    comType: 'text',
    dataType: 'string',
    required: true,
    rules: [{ required: true, message: '项目名称不可为空', trigger: 'blur' }],
    placeholder: '请输入项目名称',
    default: ''
  },
  {
    label: '文本框-多行',
    key: 'name',
    column: 3,

    length: 20,
    comName: 'TextInput',
    comType: 'text',
    dataType: 'string',
    required: true,
    rules: [{ required: true, message: '项目名称不可为空', trigger: 'blur' }],
    placeholder: '请输入项目名称',
    default: ''
  },
  {
    label: '项目名称备注',
    key: 'remark',
    column: 3,

    length: 50,
    comName: 'TextInput',
    comType: 'text',
    dataType: 'string',
    required: true,
    rules: [{ required: false }],
    placeholder: '备注',
    default: ''
  },
  {
    label: '手机号',
    key: 'phone',
    column: 3,

    length: 11,
    comName: 'TextInput',
    comType: 'text',
    dataType: 'string',
    required: true,
    rules: [
      { required: true, message: '手机号不可为空', trigger: 'blur' },
      // { type: 'number', message: '手机号必须为数字', trigger: 'blur' },
      { pattern: /^\d{11}$/, message: '手机号必须为11位数字', trigger: 'blur' }
    ],
    placeholder: '请输入11位手机号',
    default: ''
  },
  {
    label: '金额',
    key: 'money',
    column: 3,

    comName: 'TextInput',
    comType: 'text',
    dataType: 'number',
    required: true,
    slotAppend: '元',
    slotPrepend: '元',
    rules: [
      { required: true, message: '金额不可为空', trigger: 'blur' },
      { pattern: /^\d+$/, message: '只能输入数字', trigger: ['blur', 'change'] }
      // { type: 'number', message: '金额必须为数字', trigger: 'blur' }
    ],
    placeholder: '请输入金额',
    default: ''
  },
  {
    label: '参与人数',
    key: 'peops',
    column: 3,

    comName: 'NumberInput',
    dataType: 'number',
    required: true,
    rules: [{ required: true, message: '参与人数不可为空', trigger: 'blur' }],
    default: ''
  },
  {
    label: '邮箱',
    key: 'email',
    column: 3,

    length: 30,
    comName: 'TextInput',
    comType: 'text',
    dataType: 'string',
    required: true,
    rules: [
      {
        required: true,
        message: '请输入邮箱地址',
        trigger: 'blur'
      },
      {
        type: 'email',
        message: '请输入正确的邮箱格式',
        trigger: ['blur', 'change']
      }
    ],
    placeholder: '请输入邮箱',
    default: ''
  },
  {
    label: '奖励级别 基础下拉',
    key: 'level',
    column: 3,
    comName: 'BasicSelect',
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
  },
  {
    label: '省/市/县 级联 单选',
    key: 'address',
    column: 3,

    comName: 'Cascabox',
    comType: 'cascader',
    dataType: 'string',
    required: true,
    rules: [{ required: true, message: '请选择奖励级别', trigger: 'change' }],
    placeholder: '请选择地址',
    optionKey: 'cityTree',
    // onChange: 'handleTreeChange',
    propsKeys: {
      multiple: false, // 关联dataType的值（单选string ,多选 array)
      value: 'id',
      label: 'name'
    },
    showAllLevels: true,
    default: []
  },
  {
    label: '学校/学院/专业 级联 多选',
    key: 'schoolList',
    column: 3,

    comName: 'Cascabox',
    comType: 'cascader',
    dataType: 'array',
    required: true,
    rules: [{ required: true, message: '请选择专业级别', trigger: 'change' }],
    placeholder: '请选择学校/学院/专业',
    optionKey: 'orgTree',
    // onChange: 'handleTreeChange',
    propsKeys: {
      multiple: true, // 关联dataType的值（单选string ,多选 array)
      value: 'id',
      label: 'name'
    },
    showAllLevels: false,
    default: []
  },
  {
    label: '学校 下拉联动 一级',
    key: 'school',
    nodeLevel: 1,
    related: {
      1: 'school',
      2: 'college',
      3: 'major'
    },
    column: 3,

    comName: 'BasicSelect',
    comType: 'selectgroup', // 下拉联动 comType 为selectgroup
    dataType: 'string',
    required: true,
    rules: [{ required: true, message: '请选择 一级', trigger: 'change' }],
    placeholder: '请选择',
    options: [],
    optionKey: 'orgTree',
    propsKeys: {
      multiple: false,
      value: 'id',
      label: 'name'
    },
    default: ''
  },
  {
    label: '学院 下拉联动 二级',
    key: 'college',
    nodeLevel: 2,
    related: {
      1: 'school',
      2: 'college',
      3: 'major'
    },
    column: 3,
    comName: 'BasicSelect',
    comType: 'selectgroup', // 下拉联动 comType 为selectgroup
    dataType: 'string',
    required: true,
    rules: [{ required: true, message: '请选择 二级', trigger: 'change' }],
    placeholder: '请选择',
    options: [],
    optionKey: 'orgTree',
    propsKeys: {
      multiple: false,
      value: 'id',
      label: 'name'
    },
    default: ''
  },
  {
    label: '专业 下拉联动 三级',
    key: 'major',
    nodeLevel: 3,
    related: {
      1: 'school',
      2: 'college',
      3: 'major'
    },
    column: 3,

    comName: 'BasicSelect',
    comType: 'selectgroup', // 下拉联动 comType 为selectgroup
    dataType: 'string',
    required: true,
    rules: [{ required: true, message: '请选择 三级', trigger: 'change' }],
    placeholder: '请选择',
    options: [],
    propsKeys: {
      multiple: false,
      value: 'id',
      label: 'name'
    },
    optionKey: 'orgTree',
    default: ''
  },
  {
    label: '项目介绍',
    key: 'desc',
    column: 1,

    length: 500,
    comName: 'TextInput',
    comType: 'textarea',
    dataType: 'string',
    required: true,
    rules: [{ required: true, message: '项目介绍必填' }],
    options: [],
    default: ''
  }
]

export const modelsConfig = [
  {
    baseInfo: {
      comName: '项目评审模板',
      comId: 'projectReview',
      gutter: 20,
      spacing: 20,
      formSize: 'large',
      labelPosition: 'top',
      comType: 'form',
      dataType: 'object',
      required: true
    },
    comList: [
      {
        label: '项目名称2',
        key: 'name',
        column: 3,
        length: 20,
        comName: 'TextInput',
        comType: 'text',
        dataType: 'string',
        required: true,
        rules: [{ required: true, message: '项目名称不可为空', trigger: 'blur' }],
        placeholder: '请输入项目名称',
        default: ''
      },
      {
        label: '项目名称备注',
        key: 'remark',
        column: 3,

        length: 50,
        comName: 'TextInput',
        comType: 'text',
        dataType: 'string',
        required: true,
        rules: [{ required: false }],
        placeholder: '备注',
        default: ''
      },
      {
        label: '手机号',
        key: 'phone',
        column: 3,

        length: 11,
        comName: 'TextInput',
        comType: 'text',
        dataType: 'string',
        required: true,
        rules: [
          { required: true, message: '手机号不可为空', trigger: 'blur' },
          // { type: 'number', message: '手机号必须为数字', trigger: 'blur' },
          { pattern: /^\d{11}$/, message: '手机号必须为11位数字', trigger: 'blur' }
        ],
        placeholder: '请输入11位手机号',
        default: ''
      },
      {
        label: '金额',
        key: 'money',
        column: 3,

        comName: 'TextInput',
        comType: 'text',
        dataType: 'number',
        required: true,
        slotAppend: '元',
        slotPrepend: '元',
        rules: [
          { required: true, message: '金额不可为空', trigger: 'blur' },
          { pattern: /^\d+$/, message: '只能输入数字', trigger: ['blur', 'change'] }
          // { type: 'number', message: '金额必须为数字', trigger: 'blur' }
        ],
        placeholder: '请输入金额',
        default: ''
      },
      {
        label: '参与人数',
        key: 'peops',
        column: 3,

        comName: 'NumberInput',
        dataType: 'number',
        required: true,
        rules: [{ required: true, message: '参与人数不可为空', trigger: 'blur' }],
        default: ''
      },
      {
        label: '邮箱',
        key: 'email',
        column: 3,

        length: 30,
        comName: 'TextInput',
        comType: 'text',
        dataType: 'string',
        required: true,
        rules: [
          {
            required: true,
            message: '请输入邮箱地址',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: '请输入正确的邮箱格式',
            trigger: ['blur', 'change']
          }
        ],
        placeholder: '请输入邮箱',
        default: ''
      },
      {
        label: '奖励级别 基础下拉',
        key: 'level',
        column: 3,
        gutter: 20,

        comName: 'BasicSelect',
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
      },
      {
        label: '省/市/县 级联 单选',
        key: 'address',
        column: 3,

        comName: 'Cascabox',
        comType: 'cascader',
        dataType: 'string',
        required: true,
        rules: [{ required: true, message: '请选择奖励级别', trigger: 'change' }],
        placeholder: '请选择地址',
        optionKey: 'cityTree',
        // onChange: 'handleTreeChange',
        propsKeys: {
          multiple: false, // 关联dataType的值（单选string ,多选 array)
          value: 'id',
          label: 'name'
        },
        showAllLevels: true,
        default: []
      },
      {
        label: '学校/学院/专业 级联 多选',
        key: 'schoolList',
        column: 3,

        comName: 'Cascabox',
        comType: 'cascader',
        dataType: 'array',
        required: true,
        rules: [{ required: true, message: '请选择专业级别', trigger: 'change' }],
        placeholder: '请选择学校/学院/专业',
        optionKey: 'orgTree',
        // onChange: 'handleTreeChange',
        propsKeys: {
          multiple: true, // 关联dataType的值（单选string ,多选 array)
          value: 'id',
          label: 'name'
        },
        showAllLevels: false,
        default: []
      },
      {
        label: '学校 下拉联动 一级',
        key: 'school',
        nodeLevel: 1,
        related: {
          1: 'school',
          2: 'college',
          3: 'major'
        },
        column: 3,

        comName: 'BasicSelect',
        comType: 'selectgroup', // 下拉联动 comType 为selectgroup
        dataType: 'string',
        required: true,
        rules: [{ required: true, message: '请选择 一级', trigger: 'change' }],
        placeholder: '请选择',
        options: [],
        optionKey: 'orgTree',
        propsKeys: {
          multiple: false,
          value: 'id',
          label: 'name'
        },
        default: ''
      },
      {
        label: '学院 下拉联动 二级',
        key: 'college',
        nodeLevel: 2,
        related: {
          1: 'school',
          2: 'college',
          3: 'major'
        },
        column: 3,

        comName: 'BasicSelect',
        comType: 'selectgroup', // 下拉联动 comType 为selectgroup
        dataType: 'string',
        required: true,
        rules: [{ required: true, message: '请选择 二级', trigger: 'change' }],
        placeholder: '请选择',
        options: [],
        optionKey: 'orgTree',
        propsKeys: {
          multiple: false,
          value: 'id',
          label: 'name'
        },
        default: ''
      },
      {
        label: '专业 下拉联动 三级',
        key: 'major',
        nodeLevel: 3,
        related: {
          1: 'school',
          2: 'college',
          3: 'major'
        },
        column: 3,

        comName: 'BasicSelect',
        comType: 'selectgroup', // 下拉联动 comType 为selectgroup
        dataType: 'string',
        required: true,
        rules: [{ required: true, message: '请选择 三级', trigger: 'change' }],
        placeholder: '请选择',
        options: [],
        propsKeys: {
          multiple: false,
          value: 'id',
          label: 'name'
        },
        optionKey: 'orgTree',
        default: ''
      },
      {
        label: '项目介绍',
        key: 'desc',
        column: 1,

        length: 500,
        comName: 'TextInput',
        comType: 'textarea',
        dataType: 'string',
        required: true,
        rules: [{ required: true, message: '项目介绍必填' }],
        options: [],
        default: ''
      }
    ]
  },
  {
    baseInfo: {
      comName: '团建出行模板',
      comId: 'travelReview',
      gutter: 20,
      spacing: 20,
      formSize: 'small',
      labelPosition: 'top',
      comType: 'form',
      dataType: 'object',
      required: true
    },
    comList: [
      {
        label: '团建出行地点名称',
        key: 'name',
        column: 3,
        gutter: 20,
        length: 20,
        comName: 'TextInput',
        comType: 'text',
        dataType: 'string',
        required: true,
        rules: [{ required: true, message: '项目名称不可为空', trigger: 'blur' }],
        placeholder: '请输入项目名称',
        default: ''
      }
    ]
  },
  {
    baseInfo: {
      comName: '文化衫信息登记模板',
      comId: 'T-shirtReview',
      gutter: 20,
      spacing: 20,
      formSize: 'default',
      labelPosition: 'top',
      comType: 'form',
      dataType: 'object',
      required: true
    },
    comList: [
      {
        label: '你的姓名',
        key: 'name',
        gutter: 20,
        column: 3,
        length: 20,
        comName: 'TextInput',
        comType: 'text',
        dataType: 'string',
        required: true,
        rules: [{ required: true, message: '项目名称不可为空', trigger: 'blur' }],
        placeholder: '请输入项目名称',
        default: ''
      },
      {
        label: '尺寸选择',
        key: 'level',
        column: 3,

        comName: 'BasicSelect',
        comType: 'select',
        dataType: 'string',
        required: true,
        rules: [{ required: true, message: '请选择奖励级别', trigger: 'change' }],
        placeholder: '请选择',
        optionKey: 'default',
        options: [
          { label: 'S', value: 'S' },
          { label: 'm', value: 'M' },
          { label: 'L', value: 'L' },
          { label: 'XL', value: 'XL' },
          { label: 'XXL', value: 'XXL' }
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
  }
]
