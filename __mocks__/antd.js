import React from 'react';
// __mocks__/antd.js
export const Layout = ({ children }) => <div>{children}</div>;
Layout.Header = ({ children }) => <header>{children}</header>;
Layout.Content = ({ children }) => <main>{children}</main>;
Layout.Footer = ({ children }) => <footer>{children}</footer>;

export const Typography = {
  Title: ({ children }) => <h1>{children}</h1>,
  Paragraph: ({ children }) => <p>{children}</p>,
  Text: ({ children }) => <span>{children}</span>,
  Link: ({ children, href }) => <a href={href}>{children}</a>,
};

export const Row = ({ children }) => <div>{children}</div>;
export const Col = ({ children }) => <div>{children}</div>;
export const Card = ({ children }) => <section>{children}</section>;
export const List = ({ children }) => <ul>{children}</ul>;
List.Item = ({ children }) => <li>{children}</li>;
export const Divider = () => <hr />;
export const Menu = ({ children }) => <nav>{children}</nav>;
