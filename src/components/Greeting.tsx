type GreetingProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const Greeting = (props: GreetingProps) => {
    return (
        <div>
            {props.isLoggedIn
                ? `Welcome ${props.name} !, you have ${props.messageCount} unread messages`
                : `Welcome Guest`
            }
        </div>
    )
}