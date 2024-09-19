import styled from "styled-components";
import { rgba } from "polished";
import { EnumDeviceMediaQuery } from "../../responsive/device-size";

export const TableContainerBase = styled.div<{
  color: string;
  $maxHeight?: number;
}>`
  width: auto;
  max-height: ${({ $maxHeight }) => ($maxHeight ? `${$maxHeight}px` : "100%")};
  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid ${({ color }) => color};
  box-shadow: 0 0 20px ${({ color }) => rgba(color, 0.2)};

  overflow: auto;
  scroll-snap-type: y mandatory;
`;

export const StyledTableBase = styled.table<{
  color: string;
  size: "small" | "normal";
}>`
  @media ${EnumDeviceMediaQuery.MobileS} {
    width: 100%;
    font-size: 0.9em;
    border-collapse: collapse;
    position: relative;

    th,
    td {
      max-width: 200px;
      white-space: nowrap;

      ${({ size }) =>
        size === "normal" &&
        `
        padding: 12px 15px;      
      `}

      ${({ size }) =>
        size === "small" &&
        `
        padding: 8px 10px;      
      `}
    }

    thead {
      tr {
        color: white;
        text-align: left;
        font-weight: bold;
      }

      th {
        position: sticky;
        top: 0;
        background-color: ${({ color }) => color};
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid lightgray;
        transition-duration: 0ms;
        scroll-snap-align: end;

        &:nth-of-type(even) {
          background-color: ${({ color }) => rgba(color, 0.1)};
        }

        &:hover {
          background-color: ${({ color }) => rgba(color, 0.25)};
        }
      }
    }
  }
`;
