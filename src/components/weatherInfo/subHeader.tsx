import React from 'react';
import moment from 'moment';

const SubHeader = (props: { date: number }) => <span>{moment(props.date).format('ddd, h:m A')}</span>;

export default SubHeader;
