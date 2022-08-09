dim filesys, text, readfile, contents, i, cad

set filesys = CreateObject("Scripting.FileSystemObject")

'The CreateTextFile method creates the file as a TextStream object.And, please specify the path where the CVS file will be created.

Set text = filesys.CreateTextFile("C:\Users\Emilio Zambrana\Desktop\GitTest")

 

cad = ""Internal Note"+",Business Unit""

text.WriteLine (cad)

 

for i = 1 to 2

cad = ""Internal Note"+Cstr(i)+",Business Unit" "

text.WriteLine (cad)

next

text.close