function Button({ label, tarea }) {
    const styles = {
        margin: '0 5px'
    }

    return (
        <button onClick={() => tarea(label)} style={styles}>{label}</button>
    )
}

export default Button;