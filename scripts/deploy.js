const hre = require("hardhat");

async function main() {
  // Dapatkan kontrak factory-nya
  const youtubeFactory = await hre.ethers.getContractFactory("Youtube");

  // Deploy kontraknya
  const yt = await youtubeFactory.deploy();

  console.log(`Youtube deployed to: ${yt.target}`);
}

// Jalankan deploy script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
