import Alert from 'react-bootstrap/Alert';


const Welcome = () => {
    return (
        <div>
            <Alert variant="primary" className="mt-5">
                <Alert.Heading>Hey, this is an Alert!</Alert.Heading>
            </Alert>
            <h1>Benvenuto da Epibooks!</h1>
        </div>
    )
}

export default Welcome
