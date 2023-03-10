import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Noification } from './Notify/Notification';
import { Form } from 'Form/Form';
import { Contacts } from 'Form/Contacts';
// import Notiflix from 'notiflix';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    contacts: [],
  };
  onIncrement = e => {
    const { name } = e.target;
    this.setState(prevstate => ({ [name]: prevstate[name] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onFormData = data => {
    console.log(data);
  };
  render() {
    const { good, bad, neutral, contacts } = this.state;
    let total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good, bad, neutral }}
            onLeaveFeedback={this.onIncrement}
          />
          {total === 0 ? (
            <Noification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
        <Form onSubmit={this.onFormData} />
        <Contacts contacts={contacts} />
      </>
    );
  }
}
