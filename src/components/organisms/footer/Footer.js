import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, List } from 'semantic-ui-react';

import './style.scss';
import { Paragraph } from '../../atoms/typography';
import logo from '../../../assets/img/logo/logoFinal.svg'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer_content'>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <List>
                  <Link to='/'>
                    <Paragraph>Home</Paragraph>
                  </Link>
                  <Link to='/about'>
                    <Paragraph>About</Paragraph>
                  </Link>
                  <Link to='/investigation'>
                    <Paragraph>Investigation</Paragraph>
                  </Link>
                </List>
              </Grid.Column>
              <Grid.Column className='footer_copy'>
                <List>
                  <List.Item as='a'>
                    <Image
                      src={logo}
                      size='tiny'
                      circular
                      centered
                    />
                  </List.Item>
                  <Paragraph>Copyright SSUPQUIZ</Paragraph>
                </List>
              </Grid.Column>
              <Grid.Column className='footer_social'>
                <List>
                  <Paragraph>Find us on</Paragraph>
                  <Link to='/'>
                    <Paragraph>Facebook</Paragraph>
                  </Link>
                  <Link to='/'>
                    <Paragraph>Instagram</Paragraph>
                  </Link>
                  <Link to='/'>
                    <Paragraph>Twitter</Paragraph>
                  </Link>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
