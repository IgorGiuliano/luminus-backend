import prismaClient from "../../prisma"
import mqtt from 'mqtt'

class LuminusAlterateStateService {
    async execute(sensor_name: string, state: string) {
        const host = 'broker.mqttdashboard.com'
        const port = '1883'
        const clientId = `clientId-${Math.random().toString(16).slice(3)}`
    
        const connectUrl = `mqtt://${host}:${port}`
    
        const client = mqtt.connect(connectUrl, {
            clientId,
            clean: true,
            connectTimeout: 1000,
        })

        const topic = '/luminus-hivemq-mqtt-communication/esp001-receiver'
        
        console.log(state)
        client.on('connect', () => {
            client.publish(topic, state, {qos:0, retain:false}, (error) => {
                if(error) {
                    console.log(error)
                }
            })
        })
        
    };


}

export { LuminusAlterateStateService }