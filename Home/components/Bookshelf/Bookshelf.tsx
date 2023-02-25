import { FC } from 'react';
import styled from '@emotion/styled';
import { bookshelfList } from './bookshelfList';

type Header = 'h1' | 'h2';
type BookshelfPropTypes = { header?: Header };

const Table = styled.table`
  border-radius: 1px;
`;

const Tr = styled.tr``;

const Th = styled.th`
  overflow: hidden;
  padding: 16px;
  border: 1px solid #333;
  border-collapse: collapse;
  border-radius: 1px;
`;

const Td = styled.td`
  overflow: hidden;
  padding: 16px;
  border: 1px solid #333;
  border-collapse: collapse;
  border-radius: 1px;
`;

const NoTextDecorationLink = styled.a`
  text-decoration: none;
`;

export const Bookshelf: FC<BookshelfPropTypes> = () => (
  <>
    <h1>Bookshelf</h1>
    <Table>
      <colgroup>
        <col style={{ width: '58%' }} />
        <col style={{ width: '27%' }} />
        <col style={{ width: '15%' }} />
      </colgroup>
      <Tr>
        <Th>Title</Th>
        <Th>Author</Th>
        <Th>Review</Th>
      </Tr>
      {bookshelfList.map((book) => (
        <Tr key={book.link}>
          <Td>
            {book.link ? <a href={book.link}>{book.title}</a> : book.title}
          </Td>
          <Td>{book.author}</Td>
          <Td>
            <NoTextDecorationLink href={book.reviewLink} target="_blank">
              {book.stars}
            </NoTextDecorationLink>
          </Td>
        </Tr>
      ))}
    </Table>
  </>
);

export default Bookshelf;
