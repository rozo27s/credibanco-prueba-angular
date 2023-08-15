import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/servicio/profile.service';
import { PublicationService } from 'src/app/servicio/publication.service';
import { StorageService } from 'src/app/servicio/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  publicationForm = this.formBuilder.group({
    detailPublication: ['', Validators.required],
    publicationId: ['']
  });

  reactionForm = this.formBuilder.group({
    detailReaction: ['', Validators.required]
  });

  comentForm = this.formBuilder.group({
    detailComment: ['', Validators.required]
  });

  constructor(
    private storageService: StorageService,
    private profileService: ProfileService,
    private publicationService: PublicationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  profileLoginTemp: any  = {};
  profileLogin: any = {};
  name: any;
  lastname: any;
  publications: any = [];
  profiles: any = [];


  ngOnInit(): void {
    let data = this.storageService.getLocalStorage(environment.keyData);
    if (data) {
      this.profileLogin = JSON.parse(data);
      this.profileLoginTemp.profileId = this.profileLogin.profileId
      this.profileLoginTemp.name = this.profileLogin.name
      this.profileLoginTemp.lastname = this.profileLogin.lastname
      this.profileLoginTemp.email = this.profileLogin.email
      this.profileLoginTemp.creationDate = this.profileLogin.creationDate
      this.findPublicationsByProfile(this.profileLogin.profileId);
    } else {
      this.logout();
    }
  }

  viewProfile(profileId: any): void {
    this.findPublicationsByProfile(profileId);

  }

  findPublicationsByProfile(profileId: any) {
    this.publicationService.getPublications(profileId)
      .subscribe((dataPublications: any) => {
        this.publications = dataPublications;
        if (this.publications.length > 0) {
          this.profileLoginTemp = this.publications[0].profile;
        }
      },
        (error: any) => {
          console.log(error)
        });
  }

  findProfilesByHint(event: any): void {
    let value = event.target.value
    if (value.toString().length > 2) {
      this.profileService.getProfilesHint(value).subscribe((dataProfiles: any) => {
        this.profiles = dataProfiles;
      },
        (error: any) => {
          console.log(error)
        });
    } else {
      this.profiles = []
    }
  }

  savePublication(): void {
    const publication: any = {};
    const profile: any = {};
    profile.profileId = this.profileLogin.profileId
    publication.detailPublication = this.publicationForm.get('detailPublication')?.value;
    publication.profile = profile
    this.publicationService.newPublication(publication).subscribe((savePublication: any) => {
      this.publicationForm.reset()
      this.findPublicationsByProfile(this.profileLoginTemp.profileId);
    },
      (error: any) => {
        console.log(error)
      });
  }

  updatePublication(): void {
    let value = this.publicationForm.get('detailPublication')?.value;
    this.publicationService.updatePublication(this.publicationForm.value).subscribe((savePublication: any) => {
      this.publicationForm.reset()
      this.findPublicationsByProfile(this.profileLoginTemp.profileId);
    },
      (error: any) => {
        console.log(error)
      });
  }

  trigerUpdate(publicationDetail: any, publicationId: any): void {
    this.publicationForm.patchValue({
      detailPublication: publicationDetail,
      publicationId: publicationId
    })
  }

  cancelUpdate(): void {
    this.publicationForm.reset()
  }

  saveReaction(publicationId: any): void {
    const reaction: any = {};
    const profileReaction: any = {};
    const publication: any = {};
    reaction.detailReaction = this.reactionForm.get('detailReaction')?.value
    profileReaction.profileId = this.profileLogin.profileId
    publication.publicationId = publicationId
    reaction.profileReaction = profileReaction
    reaction.publication = publication
    if (reaction.detailReaction) {
      this.publicationService.newReaction(reaction).subscribe((dataReaction: any) => {
        this.findPublicationsByProfile(this.profileLoginTemp.profileId);
        this.reactionForm.reset();
      },
        (error: any) => {
          console.log(error)
        });
    }
  }

  saveComment(reactionId: any): void {
    const comment: any = {};
    const reaction: any = {};
    const profileComment: any = {};
    reaction.reactionId = reactionId
    profileComment.profileId = this.profileLogin.profileId
    comment.detailComment = this.comentForm.get('detailComment')?.value
    comment.reaction = reaction
    comment.profileComment = profileComment
    if (comment.detailComment) {
      this.publicationService.newComment(comment).subscribe((dataReaction: any) => {
        this.findPublicationsByProfile(this.profileLoginTemp.profileId);
        this.comentForm.reset()
      },
        (error: any) => {
          console.log(error)
        });
    }
  }

  deletePublication(publicationId: any): void {
    this.publicationService.deletePublication(publicationId).subscribe((dataReaction: any) => {
      this.findPublicationsByProfile(this.profileLoginTemp.profileId);
    },
      (error: any) => {
        console.log(error)
      });
  }

  logout(): void {
    this.storageService.clearStorage();
    this.router.navigate(['login']);
  }

  forbidden(): void {
    alert("Ha finalizado la sesión ingrese de nuevo");
    this.logout();
  }

}
