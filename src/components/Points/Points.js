import React from 'react',

const Points = ({points}) => {
    return (
        <View>
        {
            points.map((l, i) => (
                <ListItem
                    key={i}
                    title={l.storename}
                    subtitle={l.location}
                    bottomDivider
                />
            ))
        }
        </View>
    )
}

export default Points;