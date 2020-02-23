import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchAllGoals } from '../actions/goals'

import HomeBannerOne from '../components/organisms/banners/homeBannerOne/HomeBannerOne';
import HomeBannerTwo from '../components/organisms/banners/homeBannerTwo/HomeBannerTwo';
import HomeBannerThree from '../components/organisms/banners/homeBannerThree/HomeBannerThree';
import HomeBannerFour from '../components/organisms/banners/homeBannerFour/HomeBannerFour';
import Navbar from '../components/molecules/navbars/Navbar'
import Footer from '../components/organisms/footer/Footer'

class Home extends Component {

  componentDidMount() {
    if (_.isEmpty(this.props.goals)) {
      this.props.fetchAllGoals()
    }
  }

  render() {
    return (
      <div className='home'>
        <Navbar origin='home'/>
        <HomeBannerOne />
        <HomeBannerTwo />
        <HomeBannerThree />
        <HomeBannerFour />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals
  }
}

export default connect(mapStateToProps, { fetchAllGoals })(Home);
