import { SketchPicker } from 'react-color'
import React, { useState } from 'react'

import { ConfigProvider, Button, Space, Form, Row, Col, Divider, Select, Transfer, SpaceProps } from 'antd'

const SplitSpace = (props: JSX.IntrinsicAttributes & SpaceProps & { children?: React.ReactNode }) => (
  <Space split={<Divider type='vertical' />} size={4} {...props} />
)

const inputProps = {
  style: { width: 128 }
}

const selectProps = {
  ...inputProps,
  options: [
    { value: 'light', label: 'Light' },
    { value: 'bamboo', label: 'Bamboo' },
    { value: 'little', label: 'Little' }
  ]
}

const treeData = [
  {
    value: 'little',
    key: 'little',
    label: 'Little',
    title: 'Little',
    children: [
      { value: 'light', key: 'light', label: 'Light', title: 'Light' },
      { value: 'bamboo', key: 'bamboo', label: 'Bamboo', title: 'Bamboo' }
    ]
  }
]

const treeSelectProps = {
  ...inputProps,
  treeCheckable: true,
  maxTagCount: 'responsive',
  treeData
}

const carTabListNoTitle = [
  {
    key: 'article',
    tab: 'article'
  },
  {
    key: 'app',
    tab: 'app'
  },
  {
    key: 'project',
    tab: 'project'
  }
]

const MyTransfer = () => {
  const mockData = []
  for (let i = 0; i < 20; i++) {
    mockData.push({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`
    })
  }

  return <Transfer dataSource={mockData} targetKeys={['18']} selectedKeys={['3']} render={item => item.title} />
}

const Like = () => {
  const [color, setColor] = useState({
    primaryColor: '#1890ff',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff'
  })

  function onColorChange(nextColor) {
    const mergedNextColor = {
      ...color,
      ...nextColor
    }
    setColor(mergedNextColor)
    ConfigProvider.config({
      theme: mergedNextColor
    })
  }

  return (
    <Row gutter={16} wrap={false}>
      <Col flex='none'>
        <Space direction='vertical' align='center'>
          {/* Primary Color */}
          <SketchPicker
            presetColors={['#1890ff', '#25b864', '#ff6f00']}
            color={color.primaryColor}
            onChange={({ hex }) => {
              onColorChange({
                primaryColor: hex
              })
            }}
          />

          <span style={{ color: 'var(--ant-primary-color)' }}>var(`--ant-primary-color`)</span>

          {/* Error Color */}
          <SketchPicker
            presetColors={['#ff4d4f']}
            color={color.errorColor}
            onChange={({ hex }) => {
              onColorChange({
                errorColor: hex
              })
            }}
          />

          <span style={{ color: 'var(--ant-error-color)' }}>var(`--ant-error-color`)</span>

          {/* Warning Color */}
          <SketchPicker
            presetColors={['#faad14']}
            color={color.warningColor}
            onChange={({ hex }) => {
              onColorChange({
                warningColor: hex
              })
            }}
          />

          <span style={{ color: 'var(--ant-warning-color)' }}>var(`--ant-warning-color`)</span>

          {/* Success Color */}
          <SketchPicker
            presetColors={['#52c41a']}
            color={color.successColor}
            onChange={({ hex }) => {
              onColorChange({
                successColor: hex
              })
            }}
          />

          <span style={{ color: 'var(--ant-success-color)' }}>var(`--ant-success-color`)</span>

          {/* Info Color */}
          <SketchPicker
            presetColors={['#1890ff']}
            color={color.infoColor}
            onChange={({ hex }) => {
              onColorChange({
                infoColor: hex
              })
            }}
          />

          <span style={{ color: 'var(--ant-info-color)' }}>var(`--ant-info-color`)</span>
        </Space>
      </Col>

      <Col flex='auto'>
        <Space direction='vertical' split={<Divider />} style={{ width: '100%' }} size={0}>
          {/* Primary Button */}
          <SplitSpace>
            <Button type='primary'>Primary</Button>
            <Button>Default</Button>
            <Button type='dashed'>Dashed</Button>
            <Button type='text'>Text</Button>
            <Button type='link'>Link</Button>
          </SplitSpace>

          {/* Form - Select */}
          <Form>
            <SplitSpace>
              <Form.Item>
                <Select {...selectProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus='success'>
                <Select {...selectProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus='warning'>
                <Select {...selectProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus='error'>
                <Select {...selectProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus='validating'>
                <Select {...selectProps} />
              </Form.Item>
            </SplitSpace>
          </Form>

          <MyTransfer />
        </Space>
      </Col>
    </Row>
  )
}

export default Like
