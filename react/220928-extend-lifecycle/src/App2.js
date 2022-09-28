import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App2 extends Component {
render() {
return(
<div>
<ScrollBox ref={(ref) => this.ScrollBox=ref} />
</div>
)
}
}

export default App2;