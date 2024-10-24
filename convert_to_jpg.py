import os
import subprocess


def convert_heic_to_jpg(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith(".heic"):
            heic_path = os.path.join(directory, filename)
            jpg_path = os.path.splitext(heic_path)[0] + ".jpg"
            subprocess.run(["ffmpeg", "-i", heic_path, jpg_path])
            print(f"Converted {heic_path} to {jpg_path}")


if __name__ == "__main__":
    directory = "~/Downloads/photos_for_website"  # Change this to your directory
    convert_heic_to_jpg(directory)
