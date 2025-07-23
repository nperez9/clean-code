# Renamed file to random_audioplayer.gd for correct spelling
extends AudioStreamPlayer
class_name AudioPlayer

var music: AudioStreamMP3 = preload ("res://audio/battle_of_the_titan.mp3")
var musics = {
	"1": preload ("res://audio/battle_of_the_titan.mp3"),
	"2": preload ("res://audio/stardust.mp3")
}

func _ready():
	var track: int = randi_range(1, 2)
	stream = musics[str(track)]
	play()

func _on_finished():
	play(0.0)
