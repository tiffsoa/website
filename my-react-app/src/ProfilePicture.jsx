function ProfilePicture() {

    const imageUrl = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/snoopy-love-john-m-hasting.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} className="profile-picture-comp" src={imageUrl}></img>);

}

export default ProfilePicture