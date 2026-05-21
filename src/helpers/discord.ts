import DiscordWebhook from './discordTypes'

async function executeWebhook(payload: DiscordWebhook, webhookURL: string): Promise<void> {
  const stringifiedPayload = JSON.stringify(payload)

  const response = await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: stringifiedPayload
  })

  if (!response.ok) {
    throw new Error(`Webhook response: ${response.status} ${response.statusText}`)
  }
}

export default executeWebhook