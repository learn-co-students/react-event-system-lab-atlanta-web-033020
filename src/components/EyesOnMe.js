import React from 'react';

export default class EyesOnMe extends React.Component {

    onFocus = () => console.log('Good!')

    onBlur = () => console.log('Hey! Eyes on me!')

    render() {
        return (
            <button 
                onBlur={this.onBlur}
                onFocus={this.onFocus}
            />
        )
    }
}