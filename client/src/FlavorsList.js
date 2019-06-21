import React from 'react';
import { Table } from 'semantic-ui-react'
import FlavorListItem from './FlavorListItem';

const FlavorList = ({ flavors, onRatingSelect }) => {
  return (
    <Table basic='very' celled collapsing>
      <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Tags</Table.HeaderCell>
        <Table.HeaderCell>Rating</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
        {flavors.map((flavor) => (
          <FlavorListItem key={flavor.id} {...flavor} onRatingSelect={(value) => onRatingSelect({ value, id: flavor.id })} />
        ))}
      </Table.Body>
    </Table>
  )
}

export default FlavorList