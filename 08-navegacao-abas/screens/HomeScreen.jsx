import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, Card, Paragraph, Title } from 'react-native-paper'

export default function HomeScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text variant='headlineSmall' style={{ fontWeight: 'bold' }} >Ínicio</Text>
                
                <Card style={styles.card}>
                    <Card.Content>
                        <Title>Um titulo</Title>
                        <Paragraph>

                        </Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_gX9RMMNuQHPSdBBqwyostv7Prkoa-3FuA&s' }} />
                    </Card>
                    <Card style={styles.card}>
                    <Card.Content>
                    
                        <Title>Um titulo</Title>
                        <Paragraph>

                        </Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://i.ytimg.com/vi/7799Juu6HM4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA6y5_Y2gI7aHCIaX5C3B__ocsoqg' }} />
                    </Card>
                    <Card style={styles.card}>
                    <Card.Content>
                        <Title>Um titulo</Title>
                        <Paragraph>

                        </Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://i.ytimg.com/vi/7799Juu6HM4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA6y5_Y2gI7aHCIaX5C3B__ocsoqg' }} />
                </Card>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'fff',
      alignItems: 'center',
      paddingTop: 10
    },
    card: {
        width: '100%',
        marginBottom: 10, 
        borderRadius: 0
    }

  })