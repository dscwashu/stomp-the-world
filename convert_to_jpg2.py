import os
import subprocess


def convert_heic_to_jpg(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith(".heic"):
            heic_path = os.path.join(directory, filename)
            jpg_path = os.path.splitext(heic_path)[0] + ".jpg"
            subprocess.run(["ffmpeg", "-y", "-i", heic_path, jpg_path])
            print(f"Converted {heic_path} to {jpg_path}")


if __name__ == "__main__":
    directory = "/Users/mschulist/Downloads/stomp_the_world_images/jpgs"
    # convert_heic_to_jpg(directory)

    def rename_jpg_to_lowercase(directory):
        for filename in os.listdir(directory):
            if (
                filename.endswith(".JPG")
                or filename.endswith(".JPEG")
                or filename.endswith(".jpeg")
            ):
                jpg_path = os.path.join(directory, filename)
                new_jpg_path = os.path.join(directory, filename.lower())
                os.rename(jpg_path, new_jpg_path)
                print(f"Renamed {jpg_path} to {new_jpg_path}")

    rename_jpg_to_lowercase(directory)
