import styled from '../../../node_modules/styled-components';

const Table = styled.table`
  border:4px solid #df1e1e;
  border-collapse: collapse;

  th {
    height: 40px;
    text-align: left; 
    font-weight: bold;
    font-size: 20px;
    border-bottom:4px solid #df1e1e;
    border-right: 4px solid #df1e1e;
    padding: 7px;
  }

  tr {
    background: #0d0d0d;
  }

  td {
    height: 40px;
    border: 3px solid black;
    padding: 7px;
  }

  @media (max-width: 800px) {
    
    th {
    height: 20px;
    text-align: left; 
    font-weight: bold;
    font-size: 15px;
    border-bottom:2px solid #df1e1e;
    border-right: 2px solid #df1e1e;
    padding: 7px;
    }

    td {
    height: 20px;
    border: 1px solid black;
    padding: 3px;
    }


  }
`;

export default Table;
