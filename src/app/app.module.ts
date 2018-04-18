import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// Material design.
import { MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule, MatIconRegistry } from '@angular/material';
import { AppComponent } from './app.component';
import { FeedServiceService } from './feed-service.service';
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedCardComponent,
    StripHtmlTagsPipe,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [FeedServiceService, MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
