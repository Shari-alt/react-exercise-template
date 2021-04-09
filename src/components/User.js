function User({title, first, last, gender, picture}) {
    return (
        <section className={gender === "female" ? "femaleUser" : "maleUser"}>
            <h2> {title} {first} {last}</h2>
            <p> {gender} </p>
            <img src={picture} alt={first} />
        </section>
    )
}
export default User;
