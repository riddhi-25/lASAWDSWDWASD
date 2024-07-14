import { TestBed } from "@angular/core/testing"
import { ApiService } from "./api.service"
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import { TagInterface } from "./tag.interface";
import { HttpErrorResponse } from "@angular/common/http";

describe('apiservice',()=>{
    let apiService:ApiService;
    let httpTestingController:HttpTestingController;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[ApiService]
        });
        apiService=TestBed.inject(ApiService);
        httpTestingController=TestBed.inject(HttpTestingController)
    });

    afterEach(()=>{
        httpTestingController.verify();
    });

    it('creates service',()=>{
        expect(apiService).toBeTruthy();
    });

    describe('getTags',()=>{
        it('should return a list of tags',()=>{
            let tags:TagInterface[]|undefined;
            apiService.getTags().subscribe(response=>{
                tags=response;
            });
            const req=httpTestingController.expectOne('http://localhost:3004/tags');
            req.flush([{id:'1',name:"foo"}])
            expect(tags).toEqual([{id:'1',name:"foo"}]);
        })
    });

    describe('createTag',()=>{
        it("should create a tag",()=>{
            let tag:TagInterface|undefined
            apiService.createTag('foo').subscribe(response=>{
                tag=response
            });
            const req=httpTestingController.expectOne('http://localhost:3004/tags');
            req.flush({id:'1',name:"foo"});
            expect(tag).toEqual({id:'1',name:"foo"});
        });
        it('passes the correct body',()=>{
            let tags:TagInterface|undefined;
            apiService.createTag('foo').subscribe((response)=>{
                tags=response;
            });
            const req=httpTestingController.expectOne('http://localhost:3004/tags');
            req.flush([{id:'1',name:"foo"}])
            expect(req.request.method).toEqual('POST');
            expect(req.request.body).toEqual({name:'foo'})
        });
        it("throws error if request fails",()=>{
            let actualError:HttpErrorResponse|undefined
            apiService.createTag('foo').subscribe({
                next:()=>{
                    fail('success should not be called')
                },
                error:err=>{
                    actualError=err;
                }            
            });
            const req=httpTestingController.expectOne('http://localhost:3004/tags');
            req.flush('server error',{
                status:422,
                statusText:'Unprocessible Entity'
            });
            if(!actualError){
                throw new Error('Error needs to be defined');
            }
            expect(actualError.status).toEqual(422);
            expect(actualError.statusText).toEqual('Unprocessible Entity');

        })
    });
});