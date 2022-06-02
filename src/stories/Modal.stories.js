import React from "react";
import { storiesOf } from "@storybook/react";

import { Modal } from '../components/Modal';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
    return (<Modal
        title={<h1>Success !</h1>}
        content={<p>An employee has been added to your list.</p>}
      />);
});