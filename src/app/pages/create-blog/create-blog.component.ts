import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [CommonModule, FormsModule, EditorModule],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss',
})
export class CreateBlogComponent {
  environment = environment;
  headerContent = '';
  bodyContent = '';
  dfreeHeaderConfig = {
    selector: '.dfree-header',
    menubar: false,
    inline: true,
    toolbar: false,
    plugins: ['quickbars', 'autosave'],
    quickbars_insert_toolbar: 'undo redo',
    quickbars_selection_toolbar: 'italic underline',
    placeholder: 'Title...',
  };

  dfreeBodyConfig = {
    selector: '.dfree-body',
    menubar: false,
    inline: true,
    plugins: [
      'autolink',
      'codesample',
      'link',
      'lists',
      'autosave',
      'media',
      'table',
      'image',
      'quickbars',
      'codesample',
    ],
    toolbar: false,
    quickbars_insert_toolbar: 'quicktable image media codesample',
    quickbars_selection_toolbar:
      'bold italic underline | blocks | blockquote quicklink',
    contextmenu: 'undo redo | inserttable | cell row column deletetable',
    placeholder: 'start typing here...',
  };
}
