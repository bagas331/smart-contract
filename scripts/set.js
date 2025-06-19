const hre = require("hardhat");

async function main() {
  // Dapatkan kontrak factory-nya
  const youtubeFactory = await hre.ethers.getContractFactory("Youtube");

  // Deploy kontraknya
  const yt = await youtubeFactory.attach(
    "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  );

  const textRaw = await yt.setText("Bagas Aditya");
  console.log(`text = ${textRaw}`);
}

// Jalankan deploy script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
