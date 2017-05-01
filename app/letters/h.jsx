import React from 'react';
import {Block, Space} from './builder';
import {getRowStyle} from './utils';
export default class H extends React.PureComponent {
    render() {
        const {k} = this.props;
        const classRow = getRowStyle(k);
        return (
            <div>
                <div style={classRow}>
                    <Block k={k}/>
                    <Space />
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Block k={k}/>
                    <Space />
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Block k={k}/>
                    <Space />
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Block k={k}/>
                    <Space />
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Block k={k}/>
                    <Block k={k}/>
                    <Block k={k}/>
                    <Block k={k}/>
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Block k={k}/>
                    <Space />
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Block k={k}/>
                    <Space />
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Block k={k}/>
                    <Space />
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
                <div style={classRow}>
                    <Block k={k}/>
                    <Space />
                    <Space />
                    <Space />
                    <Block k={k}/>
                </div>
            </div>
        )
    }
}
