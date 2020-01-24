import React from 'react';
import {Link} from 'react-router-dom';
import {connectScreenSize} from 'react-screen-size';
import {mapScreenSizeToProps} from '../utils/helpers';

/* About Component */
export default connectScreenSize(mapScreenSizeToProps)(
    class About extends React.Component {
        componentDidMount() {
            document.addEventListener('keydown', this.handleKeyDown);
        }

        componentWillUnmount() {
            document.removeEventListener('keydown', this.handleKeyDown, false);
        }

        handleKeyDown = ({code}) => {
            if (code === 'Escape') this.props.history.push('/');
        };

        render() {
            const {screen} = this.props;
            return (
                <div className='studyWrapper reviewContainer'>
                    <div className='studyContainer'>
                        <div className='quizHeader'>
                            <div className='quizTitle'>
                                <span>Rólunk</span>
                            </div>
                            {!screen.isMobile && <span id="return">
              <Link to='/'>
                <i className="fa fa-times-circle" aria-hidden="true"/>
              </Link>
            </span>}
                        </div>
                        <div className='about'>
                            <h1>Sapientia informatika felkészítő kvíz!️</h1>
                            <Link className='finishBtn' to='/'>
                                <button>Vissza</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
    });
