/*
 * @Author: raotaohub
 * @Date: 2021-10-24 17:21:32
 * @LastEditTime: 2021-12-19 22:33:16
 * @LastEditors: raotaohub
 * @FilePath: \react-ts-vite\src\view\vList\V1\V1.tsx
 * @Description: Edit......
 */
import React, { useState } from 'react'
import { Table, Radio, Divider } from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address1',
    dataIndex: 'address'
  },
  {
    title: 'Address2',
    dataIndex: 'address'
  },
  {
    title: 'Address3',
    dataIndex: 'address'
  },
  {
    title: 'Address4',
    dataIndex: 'address'
  },
  {
    title: 'Address5',
    dataIndex: 'address'
  },
  {
    title: 'Address6',
    dataIndex: 'address'
  },
  {
    title: 'Address7',
    dataIndex: 'address'
  },
  {
    title: 'Address8',
    dataIndex: 'address'
  },
  {
    title: 'Address9',
    dataIndex: 'address'
  },
  {
    title: 'Address10',
    dataIndex: 'address'
  },
  {
    title: 'Address11',
    dataIndex: 'address'
  },
  {
    title: 'Address12',
    dataIndex: 'address'
  },
  {
    title: 'Address13',
    dataIndex: 'address'
  },
  {
    title: 'Address14',
    dataIndex: 'address'
  }
]

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park'
  }
]

for (let i = 5; i < 500; i++) {
  data.push({
    key: `${i}`,
    name: 'Joe Black',
    age: 99,
    address: 'Sidney No. 1 Lake Park'
  })
}
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
}

const V1 = () => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox')

  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value)
        }}
        value={selectionType}
      >
        <Radio value='checkbox'>Checkbox</Radio>
        <Radio value='radio'>radio</Radio>
      </Radio.Group>

      <Table
        bordered
        rowSelection={{
          type: selectionType,
          ...rowSelection
        }}
        pagination={{
          pageSize: 200,
          defaultPageSize: 200
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}

export default React.memo(V1, (prev, next) => {
  console.log(prev, next)
  return true
})
